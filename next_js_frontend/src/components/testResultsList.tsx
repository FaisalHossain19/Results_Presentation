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
          <table className="min-w-full table-auto border-collapse border border-gray-200 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Product Name
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Test Case ID
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Result
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Execution Date
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Version Tested
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((result) => (
                <tr key={result.key_id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {result.product_name}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {result.test_case_id}
                  </td>
                  <td
                    className={`border border-gray-300 dark:border-gray-600 px-4 py-2 ${
                      result.test_case_result === "passed"
                        ? "text-green-600 dark:text-green-400 font-semibold"
                        : "text-red-600 dark:text-red-400 font-semibold"
                    }`}
                  >
                    {result.test_case_result}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {result.execution_date}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {result.version_tested}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {result.test_category_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default TestResultsList;
