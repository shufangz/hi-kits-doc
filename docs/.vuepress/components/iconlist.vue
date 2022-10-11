<template>
  <table class="icontable">
    <tr v-for="(iconitem, ind) in iconlist1" :key="ind">
      <td v-for="(icon, index) in iconitem" :key="index" @click="copy1(icon)">
        <h-icon size="30" :name="icon"></h-icon>
        <p>{{ icon }}</p>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  data() {
    return {
      // 图标name
      iconlist: [
        'add',
        "anchor",
        "arrow_down",
        "add_circled",
        "activity",
        "arrow_backward",
        "arrow_up_down",
        "archive",
        "alarm",
        "arrow_up",
        "at_sign",
        "attachment",
        "alert_circled",
        "battery_full",
        "arrow_forward",
        "bar_chart",
        "bluetooth",
        "battery_charging",
        "badge",
        "battery_low",
        "camera",
        "battery_half",
        "basketball",
        "brush",
        "book",
        "building",
        "check_circled",
        "bulb",
        "calendar",
        "chevron_double_down",
        "bug",
        "bank",
        "burger",
        "briefcase",
        "calculator",
        "bluetooth_off",
        "chevron_backward",
        "category",
        "cart",
        "battery",
        "cast",
        "chevron_forward",
        "cake",
        "bus",
        "bookmark",
        "copy",
        "chevron_double_backward",
        "box",
        "cloud_upload",
        "chevron_down",
        "chip",
        "chevron_double_forward",
        "close_circled",
        "cloud_download",
        "coffee",
        "compass",
        "center_align",
        "chevron_up",
        "checkbox",
        "check_all",
        "clipboard",
        "basket",
        "crosshairs",
        "crop",
        "files",
        "edit",
        "chrome",
        "cycling",
        "event_add",
        "code",
        "flag",
        "command",
        "dumbell",
        "donut_chart",
        "dashboard",
        "color_palette",
        "gift",
        "cloud",
        "diamond",
        "fast_backward",
        "file_add",
        "dollar",
        "expand",
        "file",
        "film",
        "gamepad",
        "headphone",
        "hourglass",
        "figma",
        "fast_forward",
        "document",
        "drop",
        "help",
        "flight",
        "italics",
        "facebook",
        "frown",
        "database",
        "fire",
        "history",
        "laptop",
        "eye_dropper",
        "folder",
        "handcursor",
        "justify",
        "hide",
        "info",
        "group",
        "event_scheduled",
        "key",
        "grid",
        "heart",
        "flashlight",
        "linkedin",
        "hash",
        "fuel",
        "filter",
        "inbox",
        "mail",
        "collapse",
        "line_chart",
        "home",
        "link",
        "leaderboard",
        "hybrid_view",
        "mic",
        "keypad",
        "laugh",
        "layout",
        "image",
        "more_horizontal",
        "internet",
        "moon",
        "left_align",
        "loader",
        "location",
        "download",
        "message",
        "map",
        "notification",
        "keyboard",
        "euro",
        "list",
        "pause",
        "checkbox_unchecked",
        "paragraph",
        "logout",
        "payment",
        "photos",
        "layers",
        "news",
        "notes",
        "pinterest",
        "instagram",
        "lock",
        "medal",
        "menu",
        "mic_off",
        "pizza",
        "pie_chart",
        "cloud check",
        "more_vertical",
        "person",
        "chevron_double_up",
        "paint_roller",
        "phone",
        "play_circled",
        "mission",
        "live",
        "remove",
        "phone_call_outgoing",
        "music",
        "mouse",
        "percent",
        "open",
        "profile_circled",
        "note",
        "rain",
        "pin",
        "notification_off",
        "repeat",
        "login",
        "paint_bucket",
        "presentation",
        "next",
        "previous",
        "power",
        "playlist",
        "receipt",
        "messages",
        "search",
        "pen",
        "cloud_off",
        "save",
        "promotion",
        "sad",
        "scan",
        "shopping_bag",
        "send",
        "schedule",
        "rocket",
        "safe",
        "shield_check",
        "snowflake",
        "play",
        "design",
        "show",
        "sort_ascending",
        "smart_watch",
        "phone_call_rejected",
        "mobile",
        "sync",
        "puzzle",
        "printer",
        "spotify",
        "target",
        "right_align",
        "ruler",
        "toggle_right",
        "slack",
        "spray",
        "server",
        "sun",
        "reload",
        "redo",
        "truck",
        "update",
        "size",
        "timer",
        "thumbs_up",
        "thumbs_down",
        "settings",
        "video_off",
        "trophy",
        "scissors",
        "privacy",
        "phone_call_incoming",
        "shield",
        "smile",
        "stop",
        "trending_down",
        "tag",
        "toggle_left",
        "web_development",
        "warning",
        "trash",
        "share",
        "umbrella",
        "unlock",
        "trending_up",
        "underline",
        "vector",
        "ship",
        "ticket",
        "volume_off",
        "zap",
        "volume_high",
        "store",
        "watch",
        "train",
        "tablet",
        "window",
        "wind",
        "tool",
        "upload",
        "undo",
        "sort",
        "snapchat",
        "table_tennis",
        "star",
        "thermometer",
        "growth",
        "wifi",
        "zoom_in",
        "folder_add",
        "volume",
        "twitch",
        "tv",
        "tile_view",
        "utensils",
        "meh",
        "video_recorder",
        "wallet",
        "youtube",
        "wifi_off",
        "shuffle",
        "sort_decending",
        "multiselect",
        "tune",
        "wine",
        "close",
        "zoom_out",
        "del",
        "star_fill",
        "cursor",
        "col_one",
        "col_two",
        "col_three",
        "col_four",
        "ot_twobottom",
        "ol_tworight"
      ],
      iconlist1: [],
    };
  },
  mounted() {
    this.reduceArr();
  },

  methods: {
    reduceArr() {
      var arr = this.iconlist;
      var arrr = [];
      this.iconlist1 = arr.reduce(function (pre, item, index, arr) {
        var begin = index * 5;
        var end = begin + 5;
        var res = arr.slice(begin, end);
        if (res.length != 0) {
          arrr[index] = res;
        }
        return arrr;
      }, []);
    },
    copy1(name) {
      var text = '<h-icon name="' + name + '"></h-icon>';
      var ID = "TEXTAREA_COPY1";
      if (!document.getElementById(ID)) {
        var TEXTAREA = document.createElement("input");
        TEXTAREA.id = ID;
        TEXTAREA.value = text;
        TEXTAREA.style.width = "4px";
        TEXTAREA.style.height = "4px";
        TEXTAREA.style.border = "0";
        TEXTAREA.style.opacity = "0";
        TEXTAREA.style.position = "fixed";
        TEXTAREA.style.top = "0";
        TEXTAREA.style.left = "0";
        document.getElementsByTagName("body")[0].appendChild(TEXTAREA);
      } else {
        var TEXTAREA = document.getElementById("TEXTAREA_COPY1");
        TEXTAREA.value = text;
      }
      TEXTAREA.select();
      document.execCommand("Copy");
      HiMessage.success({ content: text + " 复制成功！", duration: 3000 });
    },
  },
};
</script>
<style>
.icontable {
  table-layout: fixed;
}
.icontable tr td {
  width: 100px !important;
  text-align: center;
}
.icontable tr td h-icon {
  margin-top: 14px;
}
.icontable tr td p {
  font-size: 12px;
  text-align: center;
}
.icontable tr td:hover {
  color: #42b983;
}
</style>