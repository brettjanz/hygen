module.exports = {
     params: ({ args }) => {
         return { 
             tmplsDir: args.tmplsDir || '_templates',
             marker: '/** @autogenerated-by init:self */'
         }
     }
   }