export const GetTime = async (api) => {
  const start = Date.now();
  const res = await fetch(api);
  const data = await res.json();
  const end = Date.now();


  const storedData = localStorage.getItem("Button_Data");
  let ButtonData;
  if (!storedData) {
    ButtonData = [];
  }else{
    ButtonData = JSON.parse(storedData);
  }
  ButtonData.push(data)
  const startSave = Date.now();
  localStorage.setItem('Button_Data', JSON.stringify(ButtonData));
  const endSave = Date.now();

  return { data, start, end, startSave, endSave };
};