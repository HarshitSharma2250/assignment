import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box, Button, Flex, Heading, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import PriorityPrompt from "./PriorityPrompt";
import { updateBlockPriority } from "../redux/ActionUpdate";

export const DragAndDrop = () => {
  const dispatch = useDispatch();
  const GetData = useSelector((state) => state.TODO);

  const [filter, setFilter] = useState("");
  // update the state for lanes
  const [data, setData] = useState({
    lanes: {
      "lane-1": { id: "lane-1", title: "To Do", items: [] },
      "lane-2": { id: "lane-2", title: "In Progress", items: [] },
      "lane-3": { id: "lane-3", title: "Completed", items: [] },
    },
    laneOrder: ["lane-1", "lane-2", "lane-3"],
  });

  const [showPriorityPrompt, setShowPriorityPrompt] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    if (GetData && GetData.length) {
      const newLanes = {
        "lane-1": { id: "lane-1", title: "To Do", items: GetData.filter(item => item.status === "todo") },
        "lane-2": { id: "lane-2", title: "In Progress", items: GetData.filter(item => item.status === "processing") },
        "lane-3": { id: "lane-3", title: "Completed", items: GetData.filter(item => item.status === "completed") },
      };

      // Update the state
      if (newLanes["lane-1"].items.length || newLanes["lane-2"].items.length || newLanes["lane-3"].items.length) {
        setData((prevData) => ({
          ...prevData,
          lanes: newLanes,
        }));
      }
    }
  }, [GetData]);

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceLane = data.lanes[source.droppableId];
    const destinationLane = data.lanes[destination.droppableId];
    if (destinationLane.title === "To Do" && sourceLane.title !== "To Do") return;
    if (source.droppableId !== destination.droppableId) {
      const sourceItems = Array.from(sourceLane.items);
      const destinationItems = Array.from(destinationLane.items);
      const [movedItem] = sourceItems.splice(source.index, 1);
      movedItem.status = destinationLane.title.toLowerCase();
      destinationItems.splice(destination.index, 0, movedItem);

      setData((prevData) => ({
        ...prevData,
        lanes: {
          ...prevData.lanes,
          [source.droppableId]: { ...sourceLane, items: sourceItems },
          [destination.droppableId]: { ...destinationLane, items: destinationItems },
        },
      }));

      setCurrentItem(movedItem);
      setShowPriorityPrompt(true);
    } else {
      const lane = data.lanes[source.droppableId];
      const items = Array.from(lane.items);
      const [movedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, movedItem);

      setData((prevData) => ({
        ...prevData,
        lanes: {
          ...prevData.lanes,
          [source.droppableId]: { ...lane, items },
        },
      }));
    }
  };

  const handlePrioritySubmit = (id, priority) => {
    dispatch(updateBlockPriority(id, priority));
    setData((prevData) => {
      const updatedLanes = { ...prevData.lanes };
      Object.keys(updatedLanes).forEach((laneId) => {
        updatedLanes[laneId].items = updatedLanes[laneId].items.map((item) =>
          item.id === id ? { ...item, priority } : item
        );
      });
      return {
        ...prevData,
        lanes: updatedLanes,
      };
    });

    setShowPriorityPrompt(false);
  };

  return (
    <>
     <Flex
      display={["block", "block", "flex", "flex"]}
      gap={"30px"}
       justifyContent={"center"}
        alignItems={"center"}
        >
<Input
    placeholder="Search by name"
    width={{ base: "95%", md: "20%" }}  
    minWidth="300px"
margin={["auto","auto","0","0"]}
    display={["block", "block", "flex", "flex"]}
  />      <Flex gap={"10px"}  justifyContent={"center"}>
        <Button px={"30px"}>Priority :</Button>
        <Select onChange={(e) => setFilter(e.target.value)} value={filter} placeholder="Filter" width={["30%","30%","50%","70%"]}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          </Select>
      </Flex>
    </Flex>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} p={4}>
          {data.laneOrder.map((laneId) => {
            const lane = data.lanes[laneId];

            // Filter items based on priority before rendering
            const filteredItems = filter
              ? lane.items.filter((item) => item.priority.toLowerCase() === filter.toLocaleLowerCase())
              : lane.items;

            return (
              <Droppable key={lane.id} droppableId={lane.id} direction="vertical">
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    bg="gray.100"
                    borderRadius="md"
                    p={4}
                    minHeight="200px"
                  >
                    <Heading size="md">{lane.title}</Heading>
                    {filteredItems.length === 0 ? (
                      <Text textAlign="center">No Item</Text>
                    ) : (
                      filteredItems.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <Box
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              bg="white"
                              p={4}
                              mt="1rem"
                              mb={2}
                              borderRadius="md"
                              boxShadow="sm"
                            >
                              <Heading size="md">Title: {item.title}</Heading>
                              <Text>Description: {item.description}</Text>
                              <Text>Status: {item.status}</Text>
                              <Text>Priority: {item.priority || "Not set"}</Text>
                            </Box>
                          )}
                        </Draggable>
                      ))
                    )}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            );
          })}
        </SimpleGrid>
      </DragDropContext>

      <PriorityPrompt
        isOpen={showPriorityPrompt}
        onClose={() => setShowPriorityPrompt(false)}
        onSubmit={handlePrioritySubmit}
        item={currentItem}
      />
    </>
  );
};
