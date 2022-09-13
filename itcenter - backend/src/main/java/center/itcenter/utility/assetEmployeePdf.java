package center.itcenter.utility;

import java.awt.Color;
import java.io.IOException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import center.itcenter.models.Asset_employee;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

@Setter
public class assetEmployeePdf {
    private List<Asset_employee> assets;

    public void generate(HttpServletResponse response) throws DocumentException, IOException {

        Document document = new Document(PageSize.A4);

        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();

        Font fontTiltle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        fontTiltle.setSize(20);

        Paragraph paragraph = new Paragraph("Assets List", fontTiltle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        document.add(paragraph);
        PdfPTable table = new PdfPTable(6);
        table.setWidthPercentage(100f);
        table.setWidths(new int[] { 3,3,2,2,3,2});
        table.setSpacingBefore(5);

        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(Color.blue);
        cell.setPadding(5);

        Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        font.setColor(Color.WHITE);
        cell.setPhrase(new Phrase("Asset name", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Employee name", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("From", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("To", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Cost center name", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("End of life", font));
        table.addCell(cell);

        for (Asset_employee asset : assets) {
            table.addCell(asset.getIds().getAsset().getName());
            table.addCell(asset.getIds().getEmployee().getName());
            table.addCell(asset.getFromm());
            table.addCell(asset.getToo());
            table.addCell(asset.getCostcenter().getEmployee().getCostcenter());
            table.addCell(asset.getEndoflife().toString().substring(0,10));
        }

        document.add(table);
        document.close();
    }
}