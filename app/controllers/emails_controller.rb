# frozen_string_literal: true

# Controller that manages emails
class EmailsController < ApiController
  def index
    render json: Email.all
  end

  def create
    email = Email.create(email_params)
    render json: email
  end

  private

  def email_params
    params.require(:email).permit(:email_type, :subject, :body)
  end
end
