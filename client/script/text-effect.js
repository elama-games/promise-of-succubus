/*Promise of Succubus: Visual novel
Copyright (C) 2018 Elama Games

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


var settings = {
  textSpeed: 20
}


function turnChar()
{
    var visible = $("span.dialog_visible");
    var hidden = $("span.dialog_hidden");
    visible.text(visible.text() + hidden.text().charAt(0));
    hidden.text(hidden.text().substring(1));
}


function scheduleTextEffect()
{
    var i = 1
    var text =  $("span.dialog_hidden").text();
    while (i <= text.length) {
        setTimeout(turnChar, i * 1000 / settings.textSpeed);
        ++i;
    }
}


$(document).ready(function ()
{
	scheduleTextEffect();
})
