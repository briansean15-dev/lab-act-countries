import CountryDetailPage from "./pages/CountryDetailPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

const App = () => {

  <Route path="countries">
  <Route index element={<CountriesPage />} />
  <Route path=":countryCode" element={<CountryDetailPage />} />

</Route>

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;
