import { component$ } from '@builder.io/qwik'
import { type DocumentHead, loader$, action$, zod$, z, Form } from '@builder.io/qwik-city'
import Card from '../components/Card'

interface ListItem {
  question: string
  name: string
}

export const list: ListItem[] = []

export const useListLoader = loader$(() => {
  return list
})

export const useAddToListAction = action$(
  (item) => {
    list.push(item)
    return { success: true }
  },
  zod$({
    name: z.string().trim().min(1),
    question: z.string().trim().min(1),
  })
)

export default component$(() => {
  const list = useListLoader()
  const action = useAddToListAction()

  return (
    <div class="flex flex-col justify-center items-center py-4 pb-[600px]">
      <h1 class="text-[48px] md:text-[72px] text-center">Questions?</h1>
        {list.value.map((item) => (
          <Card name={item.name} question={item.question} />
        ))}
      

      <div class="rounded-lg my-2 max-w-[500px] px-6 p-2 bg-white justify-center items-center w-full m-auto mx-auto h-1/3 sm:h-1/3 md:h-1/3 lg:mx-5 lg:h-1/3 filter drop-shadow-2xl fixed bottom-0">
        <div class="mt-3  sm:mt-5">
          <h1 class="text-xl text-gray-600 tracking-wider sm:text-md font-black">What is your question</h1>
        </div>
        
          <Form action={action} spaReset>
            <div class="mt-1 sm:mt-8">
                <label for="question" class="text-gray-700 text-xs sm:text-md">Question</label>
                <input name="question" type="text" class="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none" />
                <label for="name" class="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">Name</label>
                <input name="name" type="text" class="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none" />
            </div>
            <div class="justify-center flex-col items-center mt-2 sm:mt-8 flex pb-8">
              <button type='submit' class="bg-blue-600 text-gray-100 rounded-md h-8 sm:h-auto sm:rounded-lg w-20 sm:w-52 p-1 text-xs sm:text-md sm:p-3">
                Send
              </button>
            </div>
          </Form>
      </div>
    </div>
  )
})

export const head: DocumentHead = { title: 'Qwik for Q&A' }
