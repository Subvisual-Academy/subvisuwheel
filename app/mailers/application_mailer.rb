# frozen_string_literal: true

# Send email to the Lead
class ApplicationMailer < ActionMailer::Base
  default from: 'geral.subvisual@gmail.com'

  def win_merch_prize_email
    email_body = params[:email_body]
    set_server_url = email_body.gsub('<%= @server_url %>', ENV.fetch('SERVER_URL'))
    set_lead_name = set_server_url.gsub('<%= @lead_name %>', params[:lead_name])
    set_prize_name = set_lead_name.gsub('<%= @prize_name %>', params[:prize_name])
    set_blog = set_prize_name.gsub('<%= @blog %>', 'https://subvisual.com/blog/')
    set_contact = set_blog.gsub(
      '<%= @contact %>', 'mailto:contact@subvisual.com?subject=Hi%40Subvisual!%20I%20want%20to%20talk%20to%20you'
    )

    send_email(set_contact)
  end

  def win_nft_prize_email
    email_body = params[:email_body]
    set_server_url = email_body.gsub('<%= @server_url %>', ENV.fetch('SERVER_URL'))
    set_lead_name = set_server_url.gsub('<%= @lead_name %>', params[:lead_name])
    set_prize_name = set_lead_name.gsub('<%= @prize_name %>', params[:prize_name])
    set_form_link = set_prize_name.gsub('<%= @form_link %>', 'https://forms.gle/PKEc4CGbFMbHAfuB8')
    set_blog = set_form_link.gsub('<%= @blog %>', 'https://subvisual.com/blog/')
    set_contact = set_blog.gsub(
      '<%= @contact %>', 'mailto:contact@subvisual.com?subject=Hi%40Subvisual!%20I%20want%20to%20talk%20to%20you'
    )

    send_email(set_contact)
  end

  private

  def send_email(set_server_url)
    mail(to: params[:email],
         content_type: 'text/html',
         subject: params[:email_subject],
         body: set_server_url)
  end
end
