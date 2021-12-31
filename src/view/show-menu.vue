<template>
  <div class="show-menu">
    <nh-menu>
      <nh-menuitem>menuitem-1</nh-menuitem>
      <nh-menuitem>menuitem-2</nh-menuitem>
      <nh-submenu title="submenu-3">
        <nh-submenu title="submenu-3-1">
          <nh-submenu title="submenu-3-1-1">
            <nh-menuitem>menuitem-3-1-1-1</nh-menuitem>
            <nh-menuitem>menuitem-3-1-1-2</nh-menuitem>
            <nh-menuitem>menuitem-3-1-1-3</nh-menuitem>
          </nh-submenu>
          <nh-menuitem>menuitem-3-1-2</nh-menuitem>
          <nh-menuitem>menuitem-3-1-3</nh-menuitem>
          <nh-menuitem>menuitem-3-1-4</nh-menuitem>
        </nh-submenu>

        <nh-menuitem>menuitem-3-2</nh-menuitem>
        <nh-menuitem>menuitem-3-3</nh-menuitem>
        <nh-menuitem>menuitem-3-4</nh-menuitem>
      </nh-submenu>

      <nh-submenu></nh-submenu>
    </nh-menu>
  </div>
</template>

<script>
export default {};
</script>
