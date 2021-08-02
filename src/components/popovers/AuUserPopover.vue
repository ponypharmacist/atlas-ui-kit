<template>
  <div :class="$options.name">
    <div class="au-user-popover__left">
      <div class="au-user-popover__avatar">
        <au-icon :size="35" icon="icon-avatar" />
      </div>

      <div class="au-user-popover__info">
        <div class="au-user-popover__info-name">
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </div>

      <div
        class="au-user-popover__status"
        :class="{ online: user.isOnline }"
      />
    </div>
    <div class="au-user-popover__right"></div>
  </div>
</template>

<script>

export default {
  name: 'au-user-popover',

  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.au-user-popover {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 210px;
  padding: 2px;
  background-color: $white;
  border-radius: 4px;

  &__status {
    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: -1px;
      background-color: $gray;
      border-radius: 50%;
      border: 2px solid $white;
      width: 12px;
      height: 12px;
      z-index: 2;
    }

    &.online {
      &::before {
        background-color: $green;
      }
    }
  }

  &__left {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__avatar {
    position: relative;
    border-radius: 6px 0 0 6px;
    overflow: hidden;
    width: 60px;
    min-width: 60px;
    height: 60px;
    background: $light-gray;

    .au-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: darken($gray-blue-border, 5%);
    }

    img {
      width: 100%;
    }
  }

  &__info {
    padding: 12px;
    width: calc(100% - 60px);

    &-name {
      font-family: Ruda,sans-serif;
      font-weight: 800;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
