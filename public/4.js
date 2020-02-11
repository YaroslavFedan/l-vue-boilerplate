(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/8RZ":function(e,r,s){"use strict";s.r(r);var o=s("Gp4C"),a=s("9YrU"),t={name:"register-form",mixins:[o.a,a.a],data:function(){var e=this;return{show_password:!1,show_password_confirmation:!1,form:{name:"",email:"",password:"",password_confirmation:"",rules:!1},nameRules:[function(e){return!!e||"The name field is required."}],emailRules:[function(e){return!!e||"The email field is required."},function(e){return/.+@.+\..+/.test(e)||"The email must be a valid email address."}],passwordRules:[function(e){return!!e||"The password field is required."}],passwordConfirmationRules:[function(e){return!!e||"The password confirmation field is required."},function(r){return r===e.form.password||"The passwords does not match."}],agreeRules:[function(e){return!!e||"You must agree to the rules!"}],messageSuccess:{title:"Registered Successfully!",message:"You can login here.",type:"success"}}},methods:{onRegister:function(){var e=this;this.$refs.form.validate()&&(this.$store.dispatch("setLoading",!0),this.$store.dispatch("auth/register",this.form).then((function(r){e.$store.dispatch("setLoading",!1),e.$store.dispatch("setMessage",e.messageSuccess),e.$router.push({name:"login"})})).catch((function(r){e.$store.dispatch("setLoading",!1),e.serverErrors=r.response.data.errors})))}}},i=s("KHd+"),n=Object(i.a)(t,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("v-card",{staticClass:"elevation-12 pl-5 pr-5",attrs:{loading:e.loading}},[s("v-card-title",{attrs:{"primary-title":""}},[e._v("Home accounting")]),e._v(" "),s("v-card-text",[s("v-form",{ref:"form",attrs:{id:"register-form","lazy-validation":""},on:{submit:function(r){return r.preventDefault(),e.onRegister(r)}}},[s("v-text-field",{attrs:{id:"name",label:"Name",name:"name","prepend-icon":"person",type:"text",rules:e.nameRules,"error-messages":e.checkError("name"),required:""},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}}),e._v(" "),s("v-text-field",{attrs:{id:"email",label:"Email",name:"email","prepend-icon":"email",type:"email",rules:e.emailRules,"error-messages":e.checkError("email"),required:""},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),s("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",rules:e.passwordRules,"error-messages":e.checkError("password"),type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",required:""},on:{"click:append":function(r){e.show_password=!e.show_password}},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}}),e._v(" "),s("v-text-field",{attrs:{id:"password_confirmation",label:"Confirm password",name:"password_confirmation","prepend-icon":"lock",rules:e.passwordConfirmationRules,type:e.show_password_confirmation?"text":"password","append-icon":e.show_password_confirmation?"mdi-eye":"mdi-eye-off",required:""},on:{"click:append":function(r){e.show_password_confirmation=!e.show_password_confirmation}},model:{value:e.form.password_confirmation,callback:function(r){e.$set(e.form,"password_confirmation",r)},expression:"form.password_confirmation"}}),e._v(" "),s("v-checkbox",{attrs:{rules:e.agreeRules,label:"I agree with the rules",required:""},model:{value:e.form.rules,callback:function(r){e.$set(e.form,"rules",r)},expression:"form.rules"}})],1)],1),e._v(" "),s("v-card-actions",[s("v-btn",{attrs:{block:"",type:"submit",color:"primary",form:"register-form",loading:e.loading}},[e._v("Registration")])],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("div",{staticClass:"pt-2 pb-2"},[e._v("\n      Already have an account?\n      "),s("router-link",{attrs:{to:{name:"login"},upper:""}},[e._v("Sign in")])],1),e._v(" "),s("v-spacer")],1)],1)}),[],!1,null,null,null);r.default=n.exports},"9YrU":function(e,r,s){"use strict";r.a={computed:{loading:function(){return this.$store.getters.loading},disabled:function(){return this.loading}}}},Gp4C:function(e,r,s){"use strict";r.a={data:function(){return{serverErrors:{}}},methods:{checkError:function(e){return this.serverErrors.hasOwnProperty(e)?this.serverErrors[e]:[]}}}}}]);