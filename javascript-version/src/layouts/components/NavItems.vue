<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue';
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup :item="{
    title: 'Dashboards',
    badgeContent: '5',
    badgeClass: 'bg-error',
    icon: 'ri-home-smile-line',
  }">
    <VerticalNavLink :item="{
    title: 'Analytics',
    to: '/dashboard',
  }" />
  </VerticalNavGroup>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle :item="{
    heading: 'System management',
  }" />
  <VerticalNavLink :item="{
    title: 'Login',
    icon: 'ri-login-box-line',
    to: '/login',
  }" />
  <VerticalNavLink :item="{
    title: 'Register',
    icon: 'ri-user-add-line',
    to: '/register',
  }" />

  <VerticalNavLink :item="{
    title: 'Create Sales Account',
    icon: 'ri-user-add-line',
    to: '/register',
  }" />
  <VerticalNavLink :item="{
    title: 'Account Settings',
    icon: 'ri-user-settings-line',
    to: '/account-settings',
  }" />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle :item="{
    heading: 'Catorgories management',
  }" />
  <VerticalNavLink :item="{
    title: 'Tables',
    icon: 'ri-table-alt-line',
    to: '/tables',
  }" />
  <VerticalNavLink :item="{
    title: 'Icons',
    icon: 'ri-remixicon-line',
    to: '/icons',
  }" />
  <VerticalNavLink :item="{
    title: 'Cards',
    icon: 'ri-bar-chart-box-line',
    to: '/cards',
  }" />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle :item="{
    heading: 'suppliers management',
  }" />
  <VerticalNavLink :item="{
    title: 'Form Layouts',
    icon: 'ri-layout-4-line',
    to: '/form-layouts',
  }" />
  <VerticalNavLink :item="{
    title: 'Tables',
    icon: 'ri-table-alt-line',
    to: '/tables',
  }" />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle :item="{
    heading: 'product management',
  }" />
  <VerticalNavLink :item="{
    title: 'Form Layouts',
    icon: 'ri-layout-4-line',
    to: '/form-layouts',
  }" />
  <VerticalNavLink :item="{
    title: 'Tables',
    icon: 'ri-table-alt-line',
    to: '/tables',
  }" />
</template>
