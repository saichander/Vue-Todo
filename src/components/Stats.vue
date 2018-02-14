<template lang='haml'>
%div
  %div.level
    %div.level-left
      %div.level-item
        %table.is-narrow.is-bordered
          %thead
            %tr.is-selected
              %th Completed Todos
          %tbody
            %tr
              %td {{ $store.state.completedTodos.length }}
      %div.level-item
        %table.is-narrow.is-bordered
          %thead
            %tr.is-selected
              %th Pending Todos
          %tbody
            %tr
              %td {{ $store.state.pendingTodos.length }}
</template>
<style>
$table-head-cell-color: '#000';
@import '~bulma'
.table-narrow {
width: 100px;
}
tr.is-selected {
  background-color: pink
}

</style>

