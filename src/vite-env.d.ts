/// <reference types="vite/client" />
declare module "UIComponents/*" {
  const Component: React.ComponentType<Record<string, unknown>>;
  export default Component;
}
