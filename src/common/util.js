const methods = {
    getQueryString: (name) =>{
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var search = '?' + window.location.href.split('?')[1];
      var r = search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
    }
}

export let commonMethods  =  methods;
