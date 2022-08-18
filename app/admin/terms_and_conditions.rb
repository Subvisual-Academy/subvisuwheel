ActiveAdmin.register TermsAndCondition do

  actions :index, :show, :edit, :update

  permit_params :link
end
