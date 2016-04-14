angular.module('ng-load',[])
.service('load',function(){
    this.loadfiles = function (src, tag) {
        !Array.isArray(src) && (src = [src]);
        function* load_external (src,index) {
            var index = 0;
            while(index++ < src.length) {
                yield new Promise( (resolve, reject) => {
                    var script = document.createElement(tag);
                    script.onload = function() {
                        resolve(src[index - 1]);
                    }
                    if (tag == 'script') {
                        script.setAttribute("type","text/javascript")
                        script.setAttribute('src', src[index - 1]);
                    }
                    else {
                        script.setAttribute("rel", "stylesheet")
                        script.setAttribute("type", "text/css")
                        script.setAttribute("href", src[index - 1])
                    }
                    document.getElementsByTagName("head")[0].appendChild(script);
                })
            }
        }
        const ittr = load_external(src);
        return new Promise( resolve => {
            (function loop(){
                var next = ittr.next();

                if (next.done) {
                    resolve('done')
                }
                next.value.then(loop);
            }())
        })
    }
})
