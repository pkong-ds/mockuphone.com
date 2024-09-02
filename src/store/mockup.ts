import { map } from "nanostores";

export interface MockupValue {
  // FIXME: should be [keyof Orientation]: string;
  portrait: string;
  landscape: string;
}
export const $mockupList = map<MockupValue>({
  portrait: "someBytes",
  landscape: "someOtherBytes",
});
