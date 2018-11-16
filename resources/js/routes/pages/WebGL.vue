<template>
    <div>
        test
    </div>
</template>

<script>
    import * as THREE from 'three';

    export default {
        data:()=>({
            camera:"",
            scene:"",
            renderer:"",
            geometry:"",
            material:"",
            mesh:"",
            width: 0
        }),
        methods:{
            animate(){

                requestAnimationFrame( this.animate );
            
                this.mesh.rotation.x += 0.01;
                this.mesh.rotation.y += 0.02;
            
                this.renderer.render( this.scene, this.camera );
            
            },
            init(){
                console.log(this.width);
                this.camera = new THREE.PerspectiveCamera( 70, this.width / window.innerHeight, 0.01, 10 );
                this.camera.position.z = 1;
            
                this.scene = new THREE.Scene();
            
                this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
                this.material = new THREE.MeshNormalMaterial();
            
                this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.mesh );
            
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setSize( this.width, window.innerHeight );
                
                this.$el.appendChild( this.renderer.domElement );
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.width = this.$el.innerWidth;
                this.init();
                this.animate();
            });            
        }
    }
</script>