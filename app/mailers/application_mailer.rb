# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'geral@subvisual.com'
  # layout 'win_merch'

  def win_prize_email
    mail(to: params[:email],
         subject: "(&#129297;) You won a Prize at Subvisual's wheel of fortune!",
         body: "Email test 7 ... name: #{params[:name]}",
         content_type: 'text/html')
  end
end
