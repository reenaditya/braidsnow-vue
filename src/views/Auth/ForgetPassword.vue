<template>
	<MenuComponent/>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="account-content">
						<div class="row align-items-center justify-content-center">
							<div class="col-md-7 col-lg-6 login-left">
								<img src="assets/img/login-banner.png" class="img-fluid" alt="Login Banner">
							</div>
							<div class="col-md-12 col-lg-6 login-right">
								<div class="login-header">
									<h3>Forgot Password?</h3>
									<p class="small text-muted">Enter your email to get a password reset link</p>
								</div>
								<form action="https://pathivu.dreamguystech.com/dreamspa/login.html">
									<div class="form-group form-focus">
										<input type="email" class="form-control floating">
										<label class="focus-label">Email</label>
									</div>
									<div class="text-right">
										<router-link class="forgot-link" :to="{name:'Login'}">Remember your password?</router-link>
									</div>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer-component/> 
	<Loader :isLoading="isLoading"/>
</template>
<script>
	import MenuComponent from '@/components/Layout/Menu'
	import Loader from '@/components/Loader';
	import FooterComponent from '@/components/Layout/Footer'
	export default {
		name : 'ForgotPassword',
		components:{MenuComponent,Loader,FooterComponent},
		data(){
			return{
				isLoading:true,
			}
		},
		mounted(){
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		}
	}
</script>