<template>
  <div class="row">
    <div class="col-7">
      <h3>
        Integration with
        <a
          href="https://element-plus.org/#/en-US/component/collapse"
          target="_blank"
          >Element+ collapse</a
        >
      </h3>

      <draggable
        tag="el-collapse"
        :list="list"
        :component-data="collapseComponentData"
        item-key="id"
      >
        <template #item="{ element }">
          <el-collapse-item :title="element.title" :name="element.id">
            <div v-for="(lign, idx) in element.text" :key="idx">{{ lign }}</div>
          </el-collapse-item>
        </template>
      </draggable>
    </div>
    <rawDisplayer class="col-3" :value="list" title="List" />
    <rawDisplayer class="col-1" :value="activeNames" title="activeNames" />
  </div>
</template>

<script>
import draggable from "@/vuedraggable";

export default {
  name: "third-party",
  display: "Third party",
  order: 10,
  components: {
    draggable,
  },
  data() {
    const activeNames = [1];
    return {
      list: [
        {
          title: "Consistency",
          id: 1,
          text: [
            "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;",
            "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.",
          ],
        },
        {
          title: "Feedback",
          id: 2,
          text: [
            "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;",
            "Visual feedback: reflect current state by updating or rearranging elements of the page.",
          ],
        },
        {
          title: "Efficiency",
          id: 3,
          text: [
            "Simplify the process: keep operating process simple and intuitive;",
            "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;",
            "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.",
          ],
        },
        {
          title: "Controllability",
          id: 4,
          text: [
            "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;",
            "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.",
          ],
        },
      ],
      activeNames,
      collapseComponentData: {
        "onUpdate:modelValue": this.inputChanged,
        modelValue: activeNames,
      },
    };
  },
  methods: {
    inputChanged(val) {
      this.activeNames = val;
    },
  },
};
</script>
<style scoped></style>
