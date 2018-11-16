import Vue from "vue";

const requireComponent = require.context(
    '../components',
    true,
    /.vue$/
)
  
console.log(requireComponent);
console.log("Other Test...");
requireComponent.keys().forEach(fileName => {
    
    const componentConfig = requireComponent(fileName)
    
    const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')

    console.log("test");
    console.log(componentName)

    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
})