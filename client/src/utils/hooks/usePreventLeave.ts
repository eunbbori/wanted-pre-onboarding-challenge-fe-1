const usePreventLeave = () => {
  const eventName = "beforeunload";
  const handleEvent = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener(eventName, handleEvent);
  const disablePrevent = () =>
    window.removeEventListener(eventName, handleEvent);
  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
