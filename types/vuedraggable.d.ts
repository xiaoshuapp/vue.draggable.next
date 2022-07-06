import type { DefineComponent } from "vue";
export default draggableComponent;
declare const draggableComponent: DefineComponent<
  {
    list: {
      type: ArrayConstructor;
      required: boolean;
      default: any;
    };
    modelValue: {
      type: ArrayConstructor;
      required: boolean;
      default: any;
    };
    itemKey: {
      type: (FunctionConstructor | StringConstructor)[];
      required: boolean;
    };
    clone: {
      type: FunctionConstructor;
      default: (original: any) => any;
    };
    tag: {
      type: StringConstructor;
      default: string;
    };
    move: {
      type: FunctionConstructor;
      default: any;
    };
    componentData: {
      type: ObjectConstructor;
      required: boolean;
      default: any;
    };
  },
  any,
  {
    error: boolean;
  },
  {
    realList(): any;
    getKey(): any;
  },
  {
    getUnderlyingVm(domElement: any): any;
    getUnderlyingPotencialDraggableComponent(htmElement: any): any;
    emitChanges(evt: any): void;
    alterList(onList: any): void;
    spliceList(): void;
    updatePosition(oldIndex: any, newIndex: any): void;
    getRelatedContextFromMoveEvent({
      to,
      related,
    }: {
      to: any;
      related: any;
    }): any;
    getVmIndexFromDomIndex(domIndex: any): any;
    onDragStart(evt: any): void;
    onDragAdd(evt: any): void;
    onDragRemove(evt: any): void;
    onDragUpdate(evt: any): void;
    computeFutureIndex(relatedContext: any, evt: any): any;
    onDragMove(evt: any, originalEvent: any): any;
    onDragEnd(): void;
  },
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  string[],
  string,
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    {
      // eslint-disable-next-line @typescript-eslint/ban-types
      move: Function;
      // eslint-disable-next-line @typescript-eslint/ban-types
      clone: Function;
      componentData: Record<string, any>;
      tag: string;
      list: unknown[];
      modelValue: unknown[];
    } & {
      // eslint-disable-next-line @typescript-eslint/ban-types
      itemKey?: string | Function;
    }
  >,
  {
    // eslint-disable-next-line @typescript-eslint/ban-types
    move: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    clone: Function;
    componentData: Record<string, unknown>;
    tag: string;
    list: unknown[];
    modelValue: unknown[];
  }
>;
