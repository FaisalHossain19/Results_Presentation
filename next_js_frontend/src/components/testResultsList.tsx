interface TestResult {
    key_id: number;
    test_case_id: string;
    test_case_result: string;
    execution_date: string;
    version_tested: string;
    test_category_name: string;
    product_name: string;
  }

  interface TestResultsListProps {
    testResults: TestResult[];
  }

  const TestResultsList: React.FC<TestResultsListProps> = ({ testResults }) => {
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-center mb-4">Test Results List</h3>
        <div className="overflow-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Product Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Test Case ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Result</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Execution Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Version Tested</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((result) => (
                <tr key={result.key_id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{result.product_name}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.test_case_id}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      result.test_case_result === "passed"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }`}
                  >
                    {result.test_case_result}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{result.execution_date}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.version_tested}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.test_category_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default TestResultsList;
