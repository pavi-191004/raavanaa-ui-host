/// <reference types="vite/client" />
declare module "UIComponents/*" {
  const Component: React.ComponentType<Record<string, unknown>>;
  export default Component;
}

declare module "admin_fe/*"{
  const Component1: React.ComponentType<Record<string, unknown>>;
  export default Component1;
}

declare module "ui_student/*" {
  const Component2: React.ComponentType<Record<string, unknown>>;
  export default Component2;
}

declare module "raavana_ui_recruiter/*" {
  const Component3: React.ComponentType<Record<String, unknown>>;
  export default Component3;
}
