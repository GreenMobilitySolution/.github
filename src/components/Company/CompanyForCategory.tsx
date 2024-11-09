import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import LoadButton from "../Buttons/LoadButton";
import CompanySection from "../Cards/Company/CompanyCar";
import { Company } from "../../types";

interface CompanyProp {
  companies: Company[];
}

export function CompanyForCategory({ companies }: CompanyProp) {
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const [viewCompanies, setViewCompanies] = useState<Company[]>([]);
  const [viewItems, setViewItems] = useState(3);
  const [loading, setLoading] = useState(true);

  const handleAddMore = () => {
    setViewItems((prevViewItems) => prevViewItems + 4);
  };

  useEffect(() => {
    // Simulate fetching companies
    setTimeout(() => {
      setCompanyList(companies);
      setLoading(false);
    }, 1000);
  }, [companies]);

  useEffect(() => {
    const companiesToDisplay = companyList.slice(0, viewItems);
    setViewCompanies(companiesToDisplay);
  }, [viewItems, companyList]);

  return (
    <>
      <div className="w-[85%] border rounded-lg bg-gray-100 ">
        <div className="py-8 xmd:px-8 lg:px-10 w-full">
          <p className=" text-gray-500 text-left text-lg">Kompanyi:</p>
        </div>
        <div
          className="flex flex-col items-center justify-around gap-y-8 py-8 xmd:px-8 lg:px-16"
          id="companies"
        >
          {loading && (
            <div
              className="w-full flex justify-center px-6 py-20"
              data-testid="loading-spinner"
            >
              <PropagateLoader color="#0d5a24" />
            </div>
          )}

          {!loading && (
            <div className="w-full flex gap-y-10 justify-center flex-wrap px-2 xmd:px-0">
              {viewCompanies.length > 0
                ? viewCompanies.map((company, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2">
                      <CompanySection company={company} />
                    </div>
                  ))
                : `No companies available at the moment. Please check back later.`}
            </div>
          )}
        </div>
        {!loading && companyList.length > viewItems && (
          <div className="w-full flex items-center justify-center p-12">
            <LoadButton handle={handleAddMore}>Izindi Kompanyi</LoadButton>
          </div>
        )}
      </div>
    </>
  );
}
