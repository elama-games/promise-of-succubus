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


function turnChar()
{
    visible = $("span.dialog_visible");
    hidden = $("span.dialog_hidden");
    visible.text(visible.text() + hidden.text().charAt(0));
    hidden.text(hidden.text().substring(1);
}
