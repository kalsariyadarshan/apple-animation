import Container from '@/layouts/Container';
import EyeIcon from '../icons/eyeIcon';
import UsersIcon from '../icons/UsersIcon';
import ListIcon from '../icons/ListIcon';

const BuiltForEnterprise = () => {
  return (
    <div className="px-5">
      <Container className="md:px1-0 rounded-[40px] bg-base-185 p-6 font-Alliance md:mb-20 md:py-20">
        <div className="flex flex-col items-center justify-center">
          <span className="mb-4 flex gap-2 bg-text-primary bg-clip-text text-center text-sm font-medium uppercase leading-4 text-transparent md:mb-0">
            Built for enterprise
          </span>
          <span className="text-2xl font-bold text-white/70 md:text-5xl md:!leading-19">
            Your security is our priority
          </span>
          <p className="mb-8 text-center text-base font-medium leading-7 text-base-75/60 md:mb-16 md:max-w-2xl md:text-xl">
            Enterprise grade security and privacy combined with unparalleled
            accuracy are harnessed to solve a complex variety and scale of
            problems.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <img
            src="assets/images/zeroAccessEncryption.png"
            className="m-auto mb-5 h-full w-full max-w-[648px] lg:w-1/2 xl:ml-5"
            alt=""
          />
          <div className="flex flex-col gap-5 lg:w-1/2">
            <div className="flex gap-2 md:gap-6">
              <EyeIcon />
              <div className="w-full lg:max-w-[385px]">
                <h5 className="mb-1 font-normal leading-6 text-white md:mb-0 md:text-xl md:leading-8">
                  Every customer is assigned a private large model.
                </h5>
                <p className="text-sm font-medium leading-6 text-[#A5ABB6] md:text-base md:leading-8">
                  Manage any project from start to finish with highly
                  customizable views that make project planning a breeze.
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6">
              <UsersIcon />
              <div className="w-full lg:max-w-[385px]">
                <h5 className="mb-1 font-normal leading-6 text-white md:mb-0 md:text-xl md:leading-8">
                  We do not store customer data
                </h5>
                <p className="text-sm font-medium leading-6 text-[#A5ABB6] md:text-base md:leading-8">
                  Work with your team in real-time with Chat, assign comments
                  for action items, and never miss a beat with notifications
                  that bring everything in one place.
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6">
              <ListIcon />
              <div className="w-full lg:max-w-[385px]">
                <h5 className="mb-1 font-normal leading-6 text-white md:mb-0 md:text-xl md:leading-8">
                  We adhere to SOC2 regulations and protect our systems
                </h5>
                <p className="text-sm font-medium leading-6 text-[#A5ABB6] md:text-base md:leading-8">
                  Add visual widgets for team members, tasks, sprints, time
                  tracking, statuses, docs, embeds, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuiltForEnterprise;
