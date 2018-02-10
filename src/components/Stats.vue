<template lang='haml'>
%div
  %h3 Stats
  %div
    %span Completed Jobs
    %span {{ $store.state.completedTodos.length }}
  %div
    %span Pending Jobs
    %span {{ $store.state.pendingTodos.length }}
</template>

