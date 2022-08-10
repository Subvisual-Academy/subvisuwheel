# frozen_string_literal: true

# Send email to the Lead
class ApplicationMailer < ActionMailer::Base
  default from: 'geral.subvisual@gmail.com'

  def win_merch_prize_email
    @lead_name = params[:lead_name]
    @prize_name = params[:prize_name]
    @code_to_claim = params[:code_to_claim]
    @url = 'mailto:contact@subvisual.com?subject=Hi%40Subvisual!%20I%20want%20to%20talk%20to%20you'
    @server_url = ENV.fetch('SERVER_URL')

    mail(to: params[:email],
         subject: "🤑 You won a Prize at Subvisual's wheel of fortune!",
         template_path: 'win_prize',
         template_name: 'win_merch')
  end

  def win_nft_prize_email
    @lead_name = params[:lead_name]
    @prize_name = params[:prize_name]
    @form_link = 'https://forms.gle/PKEc4CGbFMbHAfuB8'
    @url = 'mailto:contact@subvisual.com?subject=Hi%40Subvisual!%20I%20want%20to%20talk%20to%20you'
    @server_url = ENV.fetch('SERVER_URL')

    mail(to: params[:email],
         subject: "🤑 You won a Prize at Subvisual's wheel of fortune!",
         template_path: 'win_prize',
         template_name: 'win_nft')
  end
end
