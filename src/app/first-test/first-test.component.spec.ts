import { FirstTestComponent } from "./first-test.component";

describe("First Test", ()=>{
  let component: FirstTestComponent;

  beforeEach(()=>{
      component = new FirstTestComponent();
    })

  it("Should create", ()=>{
      expect(component).toBeTruthy();
  })

  it("Check the right Title",()=>{
      expect(component.title).toEqual("First Test Component");
  })
})
