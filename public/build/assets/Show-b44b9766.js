import{_ as c}from"./AppLayout-405c7d1c.js";import p from"./DeleteUserForm-f661e914.js";import l from"./LogoutOtherBrowserSessionsForm-cdf80c1f.js";import{S as s}from"./SectionBorder-d346c4a8.js";import f from"./TwoFactorAuthenticationForm-7c439fc9.js";import u from"./UpdatePasswordForm-4fa38139.js";import d from"./UpdateProfileInformationForm-81a1f8b2.js";import{o,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-3cccf421.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-3c146b3c.js";import"./SectionTitle-ead59860.js";import"./DangerButton-4c27c073.js";import"./TextInput-d57a96be.js";import"./SecondaryButton-1ebfa4db.js";import"./ActionMessage-6e0988cb.js";import"./PrimaryButton-9020df2c.js";import"./InputLabel-226f8a78.js";import"./FormSection-2862e69a.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};