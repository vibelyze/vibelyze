<template>
 <div class="mb-6">
    <div class="container my-6">
      <div class="has-text-centered pt-6">
        <img src="../../../assets/img/logo/Logo-wit.png" style="width: 200px">
      </div>
       <div v-if="batch && campaign">
            <br>
            <br>
            <div class="box media p-6">
              <div class="media-content">
                <div class="content">
                  <nuxt-link to="/results/">< Back to orders</nuxt-link>
                  <hr>

                  <p class="subtitle">Details</p>
                  <div class="px-6">
                    <p>
                      <span>Order ID: <strong>{{ id }}</strong></span>
                      <br>
                      <span>Status: <strong>{{ batchPercentageDone }}%</strong></span>
                    </p>
                    <table class="table is-narrow is-centered">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Tasks</td>
                                <td>{{batch.num_tasks}}&nbsp;×</td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td>{{batch.repetitions}}&nbsp;×</td>
                            </tr>
                            <tr>
                                <td>Cost per Task</td>
                                <td><strong>{{campaign.info.reward}} EFX</strong> </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td><strong>Total Cost</strong></td>
                                <td><strong>{{batch.balance.quantity}}</strong> </td>
                            </tr>
                        </tfoot>
                    </table>                

                  </div>
                  <hr>

                  <p class="subtitle">Tasks</p>
                  <table class="table is-narrow">
                    <thead></thead>
                    <tbody>
                      <tr v-for="task in batchIpfs.tasks" :key="task.link_id">
                        <td>{{task.tweet_id}}</td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- <div id="tweet"></div> -->

                  <hr>

                  <p class="subtitle">Results ({{ batch.tasks_done }}/{{ batch.num_tasks * batch.repetitions }})</p>
                  <div v-if="results && results.length > 0">
                    <table class="table" style="width: 100%">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Result</th>
                          <th>Submitted on</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="r in results"
                          :key="r.id"
                        >
                          <td>{{ r.id }}</td>
                          <td>{{ r.data }}</td>
                          <td>{{ r.submitted_on }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <br>
                    <div class="buttons is-centered">
                      <button class="button is-primary mx-auto is-centered" @click.prevent="downloadTaskResults()">
                        Download results
                      </button>
                    </div>
                  </div>
                  <div v-else>
                    No results yet, please wait while someone start working on your order.
                  </div>                
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Not found</p>
          </div>          
    </div>
    <p class="has-text-centered is-size-5">Powered by <a target="_blank" href="https://effect.network">Effect Network</a></p>
  </div>
</template>

<script lang="ts">
import * as effectsdk from '@effectai/effect-js'
const jsonexport = require('jsonexport/dist')

export default {
  data() {
    return {
      client: null,
      batch: null,
      batchIpfs: null,
      id: parseInt(this.$route.params.id),
      loading: true,
      effectsdk: null,
      tasks: null,
      results: null,
      timer: null,
      campaign: null,
    }
  },
  name: "batch-results",
    mounted () {
    this.effectsdk = new effectsdk.EffectClient('mainnet')
    this.getBatch()
    this.getResults()
    this.timer = setInterval(() => {
      this.getResults()
    }, 30e3)
  },
  computed: {
    batchPercentageDone() {
      if (this.batch) {
        return Math.round((this.batch.tasks_done / (this.batch.num_tasks * this.batch.repetitions)) * 100)
      }
      return 0
    }
  },
  methods: {
    async getBatch () {
      try {
        this.loading = true
        this.batch = await this.effectsdk.force.getBatchById(this.id)
        console.log('thisbatch', this.id)
        this.batchIpfs = await this.effectsdk.force.getIpfsContent(this.batch.content.field_1)
        this.campaign = await this.effectsdk.force.getCampaign(this.batch.campaign_id)
        this.loading = false
        console.log('getBatch', this.batch, this.batchIpfs, this.campaign)
      } catch (error) {
        
      }
    },
    async getResults() {
      console.log('getting results...')
      let oldResultsLength = 0
      if (this.results){
        oldResultsLength = this.results.length
      }
      this.results = await this.effectsdk.force.getSubmissionsOfBatch(this.id)
      console.log('results', this.results)
      // check if results changed
      if (this.results.length !== oldResultsLength) {
        console.log('results changed')
        this.getBatch()
      }
    },
    async downloadTaskResults () {
      try {
        // add columns from data object to the submission object itself
        const parsedSubmissions = await Promise.all(this.results.map(async (x) => {
          const sub = {
            data: null
          }
          sub.data = JSON.parse(x.data)
          // add answers as seperate columns
          for (const result of Object.keys(sub.data)) {
            x[result] = sub.data[result]
          }
          // remove unnecassary keys for csv
          delete x.content
          delete x.batch_id
          delete x.id
          delete x.leaf_hash
          delete x.paid
          // put these attributes first
          const columnOrder = {
            link_id: null,
            account_id: null
          }
          x = Object.assign(columnOrder, x)
          return x
        }))
        await jsonexport(parsedSubmissions, (err, csv) => {
          if (err) {
            return console.error(err)
          }
          const filename = `task_results_${this.id}.csv`
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
          if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename)
          } else {
            const link = document.createElement('a')
            if (link.download !== undefined) { // feature detection
              // Browsers that support HTML5 download attribute
              const url = URL.createObjectURL(blob)
              link.setAttribute('href', url)
              link.setAttribute('download', filename)
              link.style.visibility = 'hidden'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }
          }
        })
      } catch (error) {
        console.error(error)
      }
    },
    async prepareResults (x) {
      const sub = {
        data: null
      }
      sub.data = JSON.parse(x.data)

      // add answers as seperate columns
      for (const result of Object.keys(sub.data)) {
        x[result] = sub.data[result]
      }

      // add placeholders
      const taskIndex = await this.client.force.getTaskIndexFromLeaf(this.batch.campaign_id, this.batch.id, x.leaf_hash, this.batch.tasks)
      const task = this.batch.tasks[taskIndex]
      x.placeholders = JSON.stringify(task)

      for (const result of Object.keys(task)) {
        x[result] = task[result]
      }

      // remove unnecassary keys for csv
      delete x.content
      delete x.batch_id
      delete x.id
      delete x.leaf_hash

      // put these attributes first
      const columnOrder = {
        link_id: null,
        account_id: null
      }
      x = Object.assign(columnOrder, x)

      return x
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.box {
  background-color: #1e1e1e;
}
.subtitle {
  color: #fff !important;
}
</style>
