import { Navigate, Route, Routes } from "react-router-dom"
import { Account, Bookings, Cabins, Dashboard, Login, PageNotFound, Settings, Users } from "./pages"
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Routes>

          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='dashboard' />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='cabins' element={<Cabins />} />
            <Route path='users' element={<Users />} />
            <Route path='settings' element={<Settings />} />
            <Route path='account' element={<Account />} />

          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}
export default App


// import styled from "styled-components"
// import GlobalStyles from "./styles/GlobalStyles";
// import Input from "./ui/Input";
// import Button from "./ui/Button";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";

// function App() {

//   const StyledApp = styled.main`
// background-color:white;
// padding:20px
// `;
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row >
//           <Row type='horizontal'>
//             <Heading as='h1'>The Wild Oasis</Heading>
//             <div>
//               <Heading as='h2'>check in and out</Heading>
//               <Button>Check in</Button>
//               <Button>Check out</Button>
//             </div>
//           </Row>

//           <Row >
//             <Heading as='h3'>Form</Heading>
//             <form>
//               <Input type='number' aria-label="guest" placeholder="Number of guests" />
//               <Input type='number' aria-label="guest" placeholder="Number of guests" />
//             </form>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   )
// }

// export default App
