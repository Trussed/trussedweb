@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    <router-link to="/">Home</router-link>
                    <router-link to="/webgl">WebGL</router-link>
                    <router-link to="/aws">AWS</router-link>
                    <router-link to="/docker">Docker</router-link>
                    <h1>Silly Free AWS Messaging....!</h1>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection