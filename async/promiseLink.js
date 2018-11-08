class Data {
    constructor() {
      this.loadPromiseResolve = null;
      this.loadPromiseReject = null;
      this.data = null;
    }
  
    loadData() {
         this.data = new Promise((resolve, reject) => {
        this.loadPromiseResolve = resolve;
        this.loadPromiseReject = reject;
      });
  
      return this;
    }
  
    rejectData() {
      this.loadPromiseReject('loadPromiseReject');
      return this.data;
    }
    
    resolveData() {
        this.loadPromiseResolve('loadPromiseResolve');
      return this.data;
    }
  }
  
  new Data()
  .loadData()
  .resolveData()
  .then(console.log)
  .catch(console.log)