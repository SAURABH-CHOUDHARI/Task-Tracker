
import Header from './Components/Header'
import Tasks from './Components/Tasks'

const App = () => {
  const tasks = [
    {
      text: "Prepare presentation for team meeting",
      day: "Monday at 9:00 AM",
      remainder: true
    },
    {
      text: "Grocery shopping",
      day: "Tuesday at 5:30 PM", 
      remainder: false
    },
    {
      text: "Dentist appointment",
      day: "Wednesday at 2:15 PM",
      remainder: true
    },
    {
      text: "Pay utility bills",
      day: "Thursday at 10:45 AM",
      remainder: true
    },
    {
      text: "Weekend workout",
      day: "Saturday at 8:00 AM",
      remainder: false
    }
  ];
  const deleteTask = (id) => {
      console.log('delete', id)
  } 
  

  return (
    <main className='flex w-full h-full justify-center py-10'>
    <div className='w-[35rem] border-solid border-zinc-600 border-2 font-[Poppins] h-[40rem] rounded-xl'>
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
    </main>
  )
}

export default App