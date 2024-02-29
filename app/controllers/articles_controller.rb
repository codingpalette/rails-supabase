class ArticlesController < ApplicationController
  def index
      puts "Hello World!!!"
      aa = '123'
        puts aa
        bb = current_user
        puts bb&.email

       @articles = Article.all
  end
end
