(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7pIB":function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return p}));var s=i("fXoL"),o=i("ofXK");class n{constructor(e){var t;this.rawFile=e;let i=(t=e)&&(t.nodeName||t.prop&&t.attr&&t.find)?e.value:e;this["_createFrom"+("string"==typeof i?"FakePath":"Object")](i)}_createFromFakePath(e){this.lastModifiedDate=void 0,this.size=void 0,this.type="like/"+e.slice(e.lastIndexOf(".")+1).toLowerCase(),this.name=e.slice(e.lastIndexOf("/")+e.lastIndexOf("\\")+2)}_createFromObject(e){this.size=e.size,this.type=e.type,this.name=e.name}}class r{constructor(e,t,i){this.url="/",this.headers=[],this.withCredentials=!0,this.formData=[],this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.index=void 0,this.uploader=e,this.some=t,this.options=i,this.file=new n(t),this._file=t,e.options&&(this.method=e.options.method||"POST",this.alias=e.options.itemAlias||"file"),this.url=e.options.url}upload(){try{this.uploader.uploadItem(this)}catch(e){this.uploader._onCompleteItem(this,"",0,{}),this.uploader._onErrorItem(this,"",0,{})}}cancel(){this.uploader.cancelItem(this)}remove(){this.uploader.removeFromQueue(this)}onBeforeUpload(){}onBuildForm(e){return{form:e}}onProgress(e){return{progress:e}}onSuccess(e,t,i){return{response:e,status:t,headers:i}}onError(e,t,i){return{response:e,status:t,headers:i}}onCancel(e,t,i){return{response:e,status:t,headers:i}}onComplete(e,t,i){return{response:e,status:t,headers:i}}_onBeforeUpload(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()}_onBuildForm(e){this.onBuildForm(e)}_onProgress(e){this.progress=e,this.onProgress(e)}_onSuccess(e,t,i){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=void 0,this.onSuccess(e,t,i)}_onError(e,t,i){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=void 0,this.onError(e,t,i)}_onCancel(e,t,i){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=void 0,this.onCancel(e,t,i)}_onComplete(e,t,i){this.onComplete(e,t,i),this.uploader.options.removeAfterUpload&&this.remove()}_prepareToUploading(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0}}let a=(()=>{class e{static getMimeClass(e){let t="application";return-1!==this.mime_psd.indexOf(e.type)||e.type.match("image.*")?t="image":e.type.match("video.*")?t="video":e.type.match("audio.*")?t="audio":"application/pdf"===e.type?t="pdf":-1!==this.mime_compress.indexOf(e.type)?t="compress":-1!==this.mime_doc.indexOf(e.type)?t="doc":-1!==this.mime_xsl.indexOf(e.type)?t="xls":-1!==this.mime_ppt.indexOf(e.type)&&(t="ppt"),"application"===t&&(t=this.fileTypeDetection(e.name)),t}static fileTypeDetection(e){let t={jpg:"image",jpeg:"image",tif:"image",psd:"image",bmp:"image",png:"image",nef:"image",tiff:"image",cr2:"image",dwg:"image",cdr:"image",ai:"image",indd:"image",pin:"image",cdp:"image",skp:"image",stp:"image","3dm":"image",mp3:"audio",wav:"audio",wma:"audio",mod:"audio",m4a:"audio",compress:"compress",zip:"compress",rar:"compress","7z":"compress",lz:"compress",z01:"compress",bz2:"compress",gz:"compress",pdf:"pdf",xls:"xls",xlsx:"xls",ods:"xls",mp4:"video",avi:"video",wmv:"video",mpg:"video",mts:"video",flv:"video","3gp":"video",vob:"video",m4v:"video",mpeg:"video",m2ts:"video",mov:"video",doc:"doc",docx:"doc",eps:"doc",txt:"doc",odt:"doc",rtf:"doc",ppt:"ppt",pptx:"ppt",pps:"ppt",ppsx:"ppt",odp:"ppt"},i=e.split(".");if(i.length<2)return"application";let s=i[i.length-1].toLowerCase();return void 0===t[s]?"application":t[s]}}return e.mime_doc=["application/msword","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.wordprocessingml.template","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12"],e.mime_xsl=["application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.spreadsheetml.template","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12","application/vnd.ms-excel.addin.macroEnabled.12","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],e.mime_ppt=["application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.presentationml.template","application/vnd.openxmlformats-officedocument.presentationml.slideshow","application/vnd.ms-powerpoint.addin.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],e.mime_psd=["image/photoshop","image/x-photoshop","image/psd","application/photoshop","application/psd","zz-application/zz-winassoc-psd"],e.mime_compress=["application/x-gtar","application/x-gcompress","application/compress","application/x-tar","application/x-rar-compressed","application/octet-stream","application/x-zip-compressed","application/zip-compressed","application/x-7z-compressed","application/gzip","application/x-bzip2"],e})();class p{constructor(e){this.isUploading=!1,this.queue=[],this.progress=0,this._nextIndex=0,this.options={autoUpload:!1,isHTML5:!0,filters:[],removeAfterUpload:!1,disableMultipart:!1,formatDataFunction:e=>e._file,formatDataFunctionIsAsync:!1},this.setOptions(e),this.response=new s.n}setOptions(e){this.options=Object.assign(this.options,e),this.authToken=this.options.authToken,this.authTokenHeader=this.options.authTokenHeader||"Authorization",this.autoUpload=this.options.autoUpload,this.options.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.options.maxFileSize&&this.options.filters.unshift({name:"fileSize",fn:this._fileSizeFilter}),this.options.allowedFileType&&this.options.filters.unshift({name:"fileType",fn:this._fileTypeFilter}),this.options.allowedMimeType&&this.options.filters.unshift({name:"mimeType",fn:this._mimeTypeFilter});for(let t=0;t<this.queue.length;t++)this.queue[t].url=this.options.url}addToQueue(e,t,i){let s=[];for(let n of e)s.push(n);let o=this._getFilters(i),a=this.queue.length,p=[];s.map(e=>{t||(t=this.options);let i=new n(e);if(this._isValidFile(i,o,t)){let i=new r(this,e,t);p.push(i),this.queue.push(i),this._onAfterAddingFile(i)}else this._onWhenAddingFileFailed(i,o[this._failFilterIndex],t)}),this.queue.length!==a&&(this._onAfterAddingAll(p),this.progress=this._getTotalProgress()),this._render(),this.options.autoUpload&&this.uploadAll()}removeFromQueue(e){let t=this.getIndexOfItem(e),i=this.queue[t];i.isUploading&&i.cancel(),this.queue.splice(t,1),this.progress=this._getTotalProgress()}clearQueue(){for(;this.queue.length;)this.queue[0].remove();this.progress=0}uploadItem(e){let t=this.getIndexOfItem(e),i=this.queue[t],s=this.options.isHTML5?"_xhrTransport":"_iframeTransport";i._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[s](i))}cancelItem(e){let t=this.getIndexOfItem(e),i=this.queue[t];i&&i.isUploading&&(this.options.isHTML5?i._xhr:i._form).abort()}uploadAll(){let e=this.getNotUploadedItems().filter(e=>!e.isUploading);e.length&&(e.map(e=>e._prepareToUploading()),e[0].upload())}cancelAll(){this.getNotUploadedItems().map(e=>e.cancel())}isFile(e){return function(e){return File&&e instanceof File}(e)}isFileLikeObject(e){return e instanceof n}getIndexOfItem(e){return"number"==typeof e?e:this.queue.indexOf(e)}getNotUploadedItems(){return this.queue.filter(e=>!e.isUploaded)}getReadyItems(){return this.queue.filter(e=>e.isReady&&!e.isUploading).sort((e,t)=>e.index-t.index)}destroy(){}onAfterAddingAll(e){return{fileItems:e}}onBuildItemForm(e,t){return{fileItem:e,form:t}}onAfterAddingFile(e){return{fileItem:e}}onWhenAddingFileFailed(e,t,i){return{item:e,filter:t,options:i}}onBeforeUploadItem(e){return{fileItem:e}}onProgressItem(e,t){return{fileItem:e,progress:t}}onProgressAll(e){return{progress:e}}onSuccessItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onErrorItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onCancelItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onCompleteItem(e,t,i,s){return{item:e,response:t,status:i,headers:s}}onCompleteAll(){}_mimeTypeFilter(e){return!(this.options.allowedMimeType&&-1===this.options.allowedMimeType.indexOf(e.type))}_fileSizeFilter(e){return!(this.options.maxFileSize&&e.size>this.options.maxFileSize)}_fileTypeFilter(e){return!(this.options.allowedFileType&&-1===this.options.allowedFileType.indexOf(a.getMimeClass(e)))}_onErrorItem(e,t,i,s){e._onError(t,i,s),this.onErrorItem(e,t,i,s)}_onCompleteItem(e,t,i,s){e._onComplete(t,i,s),this.onCompleteItem(e,t,i,s);let o=this.getReadyItems()[0];this.isUploading=!1,o?o.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),this._render())}_headersGetter(e){return t=>t?e[t.toLowerCase()]||void 0:e}_xhrTransport(e){let t,i=this,s=e._xhr=new XMLHttpRequest;if(this._onBeforeUploadItem(e),"number"!=typeof e._file.size)throw new TypeError("The file specified is no longer valid");if(this.options.disableMultipart)t=this.options.formatDataFunction(e);else{t=new FormData,this._onBuildItemForm(e,t);const i=()=>t.append(e.alias,e._file,e.file.name);this.options.parametersBeforeFiles||i(),void 0!==this.options.additionalParameter&&Object.keys(this.options.additionalParameter).forEach(i=>{let s=this.options.additionalParameter[i];"string"==typeof s&&s.indexOf("{{file_name}}")>=0&&(s=s.replace("{{file_name}}",e.file.name)),t.append(i,s)}),this.options.parametersBeforeFiles&&i()}if(s.upload.onprogress=t=>{let i=Math.round(t.lengthComputable?100*t.loaded/t.total:0);this._onProgressItem(e,i)},s.onload=()=>{let t=this._parseHeaders(s.getAllResponseHeaders()),i=this._transformResponse(s.response,t);this["_on"+(this._isSuccessCode(s.status)?"Success":"Error")+"Item"](e,i,s.status,t),this._onCompleteItem(e,i,s.status,t)},s.onerror=()=>{let t=this._parseHeaders(s.getAllResponseHeaders()),i=this._transformResponse(s.response,t);this._onErrorItem(e,i,s.status,t),this._onCompleteItem(e,i,s.status,t)},s.onabort=()=>{let t=this._parseHeaders(s.getAllResponseHeaders()),i=this._transformResponse(s.response,t);this._onCancelItem(e,i,s.status,t),this._onCompleteItem(e,i,s.status,t)},s.open(e.method,e.url,!0),s.withCredentials=e.withCredentials,this.options.headers)for(let o of this.options.headers)s.setRequestHeader(o.name,o.value);if(e.headers.length)for(let o of e.headers)s.setRequestHeader(o.name,o.value);this.authToken&&s.setRequestHeader(this.authTokenHeader,this.authToken),s.onreadystatechange=function(){s.readyState==XMLHttpRequest.DONE&&i.response.emit(s.responseText)},this.options.formatDataFunctionIsAsync?t.then(e=>s.send(JSON.stringify(e))):s.send(t),this._render()}_getTotalProgress(e=0){if(this.options.removeAfterUpload)return e;let t=this.getNotUploadedItems().length,i=100/this.queue.length;return Math.round((t?this.queue.length-t:this.queue.length)*i+e*i/100)}_getFilters(e){if(!e)return this.options.filters;if(Array.isArray(e))return e;if("string"==typeof e){let t=e.match(/[^\s,]+/g);return this.options.filters.filter(e=>-1!==t.indexOf(e.name))}return this.options.filters}_render(){}_queueLimitFilter(){return void 0===this.options.queueLimit||this.queue.length<this.options.queueLimit}_isValidFile(e,t,i){return this._failFilterIndex=-1,!t.length||t.every(t=>(this._failFilterIndex++,t.fn.call(this,e,i)))}_isSuccessCode(e){return e>=200&&e<300||304===e}_transformResponse(e,t){return e}_parseHeaders(e){let t,i,s,o={};return e?(e.split("\n").map(e=>{s=e.indexOf(":"),t=e.slice(0,s).trim().toLowerCase(),i=e.slice(s+1).trim(),t&&(o[t]=o[t]?o[t]+", "+i:i)}),o):o}_onWhenAddingFileFailed(e,t,i){this.onWhenAddingFileFailed(e,t,i)}_onAfterAddingFile(e){this.onAfterAddingFile(e)}_onAfterAddingAll(e){this.onAfterAddingAll(e)}_onBeforeUploadItem(e){e._onBeforeUpload(),this.onBeforeUploadItem(e)}_onBuildItemForm(e,t){e._onBuildForm(t),this.onBuildItemForm(e,t)}_onProgressItem(e,t){let i=this._getTotalProgress(t);this.progress=i,e._onProgress(t),this.onProgressItem(e,t),this.onProgressAll(i),this._render()}_onSuccessItem(e,t,i,s){e._onSuccess(t,i,s),this.onSuccessItem(e,t,i,s)}_onCancelItem(e,t,i,s){e._onCancel(t,i,s),this.onCancelItem(e,t,i,s)}}let l=(()=>{class e{constructor(e){this.onFileSelected=new s.n,this.element=e}getOptions(){return this.uploader.options}getFilters(){return{}}isEmptyAfterSelection(){return!!this.element.nativeElement.attributes.multiple}onChange(){let e=this.element.nativeElement.files,t=this.getOptions(),i=this.getFilters();this.uploader.addToQueue(e,t,i),this.onFileSelected.emit(e),this.isEmptyAfterSelection()&&(this.element.nativeElement.value="")}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(s.l))},e.\u0275dir=s.Fb({type:e,selectors:[["","ng2FileSelect",""]],hostBindings:function(e,t){1&e&&s.Xb("change",(function(){return t.onChange()}))},inputs:{uploader:"uploader"},outputs:{onFileSelected:"onFileSelected"}}),e})(),d=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[o.c]]}),e})()}}]);