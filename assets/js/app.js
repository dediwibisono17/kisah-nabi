"use strict";$("#scroll-top").hide(),$(function(){$(window).scroll(function(){100<$(this).scrollTop()?$("#scroll-top").fadeIn():$("#scroll-top").fadeOut()}),$("#scroll-top button").click(function(){$("body,html").animate({scrollTop:0},300)})});for(var name_=["adam","idris","nuh","hud","shaleh","ibrahim","luth","ismail","ishaq","yaqub","yusuf","ayyub","syuaib","musa","harun","dzulkifli","daud","sulaiman","ilyas","ilyasa","yunus","yahya","isa","muhammad"],a=0;a<name_.length;a++)$("#name_").append('\n        <option value="'.concat(name_[a],'">').concat(name_[a],"</option>\n    "));function ajax_(){return new Promise(function(n){var a=$(".nama-nabi").val().toLowerCase();$.ajax({url:"https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi",method:"GET",data:{q:a},success:function(a){$(".block_").children().remove(),$(".block_").append('\n                <div class="card_">\n                    <div class="image">\n                        <img src="'.concat(a.nabi.image,'" alt="').concat(a.nabi.nama,'" title="').concat(a.nabi.nama,'" class="text-center">\n                    </div>\n                    <div class="detail">\n                        <div class="nama">').concat(a.nabi.nama,'</div>\n                        <div class="lahir">Tempat di ').concat(a.nabi.tempat,'</div>\n                        <div class="usia">Wafat di ').concat(a.nabi.umur,' Tahun</div>\n                    </div>\n                </div>\n                <br/>\n\n                <div class="kisah">\n                </div>\n                ')),n(a.nabi.kisah)}})})}function button(){ajax_().then(function(a){$(".kisah").html(a.split("\n").join("<br />"))})}$(function(){$(".nama-nabi").select2({language:{noResults:function(){return"Nama Tidak ditemukan"}}}),button()});
