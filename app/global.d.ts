declare module "three/examples/jsm/controls/OrbitControls" {
  export class OrbitControls extends THREE.EventDispatcher {
    constructor(object: THREE.Camera, domElement: HTMLElement);
    update(): void;
  }
}
