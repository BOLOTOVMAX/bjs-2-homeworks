//Задача № 1
function cachingDecoratorNew(func) {
        let cache = [];
        
        return function wrapper(...args) {
          const hash = md5(JSON.stringify(args));
          let objectInCache = cache.find((item) => item.hash === hash);
          if (objectInCache) {
            console.log("Из кэша: " + objectInCache.value);
            return "Из кэша: " + objectInCache.value;
          }
      
          let result = func(...args);
          cache.push({ hash, value: result });
          if (cache.length > 5) {
            cache.shift();
          }
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;
        };
    }


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    
    function wrapper(...args) {

      clearTimeout(timeoutId);
      wrapper.allCount++;

        if (!timeoutId) {
            func(...args);
            wrapper.count++;
        }

        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);
    }
     wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper          
}
        
    

