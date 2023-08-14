//adobe font//
(function (d) {
  var config = {
      kitId: "awk3hij",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

(function (d) {
  var config = {
      kitId: "awk3hij",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

$(function () {
  $(window).on("scroll", function () {
    if ($(".fv").height() < $(this).scrollTop()) {
      $(".js-header").addClass("change-color");
    } else {
      $(".js-header").removeClass("change-color");
    }
  });
});

$(function () {
  var $btn = $(".works_page_btn [data-filter]"),
    $list = $(".works_list [data-category]");

  $btn.on("click", function (e) {
    e.preventDefault();

    var $btnTxt = $(this).attr("data-filter");

    if ($btnTxt == "all") {
      $list
        .fadeOut()
        .promise()
        .done(function () {
          $list.addClass("animate").fadeIn();
        });
    } else {
      $list
        .fadeOut()
        .promise()
        .done(function () {
          $list
            .filter('[data-category = "' + $btnTxt + '"]')
            .addClass("animate")
            .fadeIn();
        });
    }
  });
});

$(function () {
  $(".sp_btn, .sp_nav li").on("click", function () {
    $(".sp_nav").fadeToggle();
    $(".sp_btn").toggleClass("open");
  });
});

$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem("access")) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass("is-hidden");
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem("access", "true"); // sessionStorageにデータを保存
      $(".loading-animation").addClass("is-active"); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading-animation").removeClass("is-active");
        $(".loading").fadeOut();
      }, 3000); // ローディングを表示する時間
    }
  };
  webStorage();
});

$(".works_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  autoplay: true,
  dots: true,
  arrows: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
