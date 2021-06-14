class Bind {

   constructor(model, view, props){
      
   let proxy =  ProxyFactorty.create(
        model, 
        props,
         function(model){
           view.update(model)})

           view.update(model);

        return proxy;

   }

}