import { useModal } from '@/Context/Modal';
import RightArrow from '../icons/RightArrow';

const FormModal = () => {
  const { setIsShowForm } = useModal();

  return (
    <div className="fixed left-0 top-0 z-[150] flex h-screen w-full items-center justify-center bg-base-100/70 p-5 font-Alliance">
      <div className="mx-auto w-full justify-center">
        <div className="mx-auto w-full rounded-md">
          <div className="relative mx-auto w-full max-w-[1000px] rounded-lg border border-[#3D3D3D] bg-base-100">
            <button
              onClick={() => setIsShowForm(false)}
              className="text-md absolute right-3 top-3 rounded-lg bg-base-200 px-2 py-[3px] font-bold text-white sm:right-5 sm:top-5"
            >
              ⛌
            </button>
            <div className="flex h-full flex-col items-center sm:justify-center">
              <div className="h-full max-h-[calc(100vh-100px)] w-full overflow-hidden overflow-y-scroll bg-base-100 p-8 shadow-md sm:rounded-lg md:p-16">
                <form action="" className="flex flex-col gap-8">
                  <div className="flex flex-col gap-10 md:flex-row">
                    <div className="flex w-full flex-col gap-2">
                      <label
                        htmlFor=""
                        className="text-lg font-semibold leading-[150%] text-white"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="rounded-xl bg-base-200 p-3 text-base font-medium text-gray-100 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <label
                        htmlFor=""
                        className="text-lg font-semibold leading-[150%] text-white"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="rounded-xl bg-base-200 p-3 text-base font-medium text-gray-100 outline-none"
                        placeholder="David"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 md:flex-row">
                    <div className="flex w-full flex-col gap-2">
                      <label
                        htmlFor=""
                        className="text-lg font-semibold leading-[150%] text-white"
                      >
                        Company Email *
                      </label>
                      <input
                        type="text"
                        className="rounded-xl bg-base-200 p-3 text-base font-medium text-gray-100 outline-none"
                        placeholder="Example@gmail.com"
                      />
                    </div>
                    <div className="select flex w-full flex-col gap-2">
                      <label
                        htmlFor=""
                        className="text-lg font-semibold leading-[150%] text-white"
                      >
                        Company Size *
                      </label>
                      <select
                        className="rounded-xl bg-base-200 p-3 text-base font-medium text-gray-100 outline-none"
                      >
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 md:flex-row">
                    <div className="select flex w-full flex-col gap-2">
                      <label
                        htmlFor=""
                        className="text-lg font-semibold leading-[150%] text-white"
                      >
                        Country *
                      </label>
                      <select
                        className="rounded-xl bg-base-200 p-3 text-base font-medium text-gray-100 outline-none"
                      >
                        <option value="">India</option>
                        <option value="">Uk</option>
                        <option value="">Uae</option>
                      </select>
                    </div>
                    <div className="flex w-full flex-col gap-2"></div>
                  </div>
                  <div className="flex flex-col gap-10 md:flex-row">
                    <div className="flex w-full flex-col gap-2">
                      <label
                        htmlFor=""
                        className="text-lg font-semibold leading-[150%] text-white"
                      >
                        What would you like to discuss? *
                      </label>
                      <textarea
                        className="rounded-xl bg-base-200 p-3 text-base font-medium text-gray-100 outline-none"
                        rows={5}
                        placeholder="Tell us about your team and provide some details about a project or process you would like to track in asana."
                      ></textarea>
                    </div>
                  </div>
                  <div className="mx-auto">
                    <button
                      className="flex items-center justify-center gap-2 rounded-full bg-button-primary px-5 py-2 text-sm font-medium leading-7 text-white"
                      onClick={() => setIsShowForm(false)}
                    >
                      <span>Submit</span> <RightArrow />
                    </button>
                  </div>
                  <div className="mx-auto flex max-w-[770px] flex-col gap-4 text-center">
                    <p className="text text-lg font-semibold leading-[150%] text-[#f4ac3c]">
                      Fields marked with an asterisk(*) are required
                    </p>
                    <p className="text text-lg font-semibold leading-[150%] text-white">
                      By completing and submitting the form, you will receive
                      information, tips, and promotions from eos. To learn more
                      about how eos uses your information, see our Privacy
                      Statement.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
