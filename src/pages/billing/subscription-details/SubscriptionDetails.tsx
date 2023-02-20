import { UsersIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import AccountContext, { SubscriptionType } from "../../../contexts/AccountContext";
import { ContentSection } from "./content-section/ContentSection";
import NoSubscription from "./NoSubscription";

export const SubscriptionDetails = () => {

    const accountContext = useContext(AccountContext);
    const account = accountContext.account;

  return (
      <div className="px-3 py-10 overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 bg-white font-jakarta">
          <div className="sm:px-6">
              <div className="flex flex-wrap items-center justify-between">
                  <div className="pointer-default select-none flex space-x-3 items-center">
                      <UsersIcon className="h-6 w-6 text-gray-700" />
                      <span className="text-md font-semibold text-gray-500">Subscription</span>
                  </div>
              </div>
          </div>
          {account.subscription.type === SubscriptionType.none && (
              <>
                  <div className="px-4 py-5">
                      <NoSubscription />
                  </div>
              </>
          )}

          {account.subscription.type !== SubscriptionType.none && (
              <>
                  <div className="px-4 py-5">
                      <ContentSection />
                  </div>
                  <div className="flex justify-between px-4 sm:px-6 ">
                      <div className="flex justify-start space-x-2">
                          <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out">
                              Modify
                          </button>
                      </div>
                      <div className="flex justify-end space-x-2">
                          <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out">
                              Apply Discount
                          </button>
                          <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-3 py-2 text-sm font-medium leading-4 text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 ease-in-out">
                              Cancel
                          </button>
                      </div>
                  </div>
              </>
          )}
      </div>
  );
}
