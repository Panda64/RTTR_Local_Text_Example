import ReactThreeTestRenderer from "@react-three/test-renderer";
import { Box, Text } from "@react-three/drei";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

test("example test 1", async () => {
  window.HTMLCanvasElement.prototype.getContext = () => {};
  const renderer = await ReactThreeTestRenderer.create(
    <group>
      <Box name="box_test" />
    </group>
  );

  // Logging box mesh to verify RTTR functionality
  console.log(renderer.scene.instance.children[0].children);

  // Dummy Expect
  expect(renderer).toBeTruthy();
});

test("example test 2", async () => {
  const renderer = await ReactThreeTestRenderer.create(
    <group>
      <Box name="box_test" />
      <Text name="text_test"> Testing </Text>
    </group>
  );
  
  // Logging scene children
  // Expect to see Text object, but no children are present
  console.log(renderer.scene.instance.children);

  // Dummy Expect
  expect(renderer).toBeTruthy();
});

test("example test 3", async () => {
  const renderer = await ReactThreeTestRenderer.create(
    <Text name="text_test"> Testing </Text>
  );

  // Logging scene children
  // Expect to see Text object, but no children are present
  console.log(renderer.scene.instance.children);

  // Dummy Expect
  expect(renderer).toBeTruthy();
});
