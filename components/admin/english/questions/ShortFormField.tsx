"use client"

import QuestionFormField from "../QuestionFormField"

const ShortFormField = () => {
  return (
    <QuestionFormField label="Nhóm câu hỏi" renderItem={(index) => 
      <>
        <div>
          <p className="text-xs font-semibold mb-1.5 capitalize">
            question name <span className="text-red-600">*</span>
            <span className="icon inline-block w-3 h-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>
            </span>
          </p>
          <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
            <input type="text" className="w-full px-4 py-2" placeholder="What type of mineral were the Dolaucothi mines in Wales built to extract?" />
          </div>
        </div>
      
        <div className="mt-4">
          <p className="text-xs font-semibold mb-1.5 capitalize">
            answer <span className="text-red-600">*</span>
          </p>
          <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
            <input type="text" className="w-full px-4 py-2" placeholder="gold" />
          </div>
        </div>
      </>
    } />
  )
}

export default ShortFormField